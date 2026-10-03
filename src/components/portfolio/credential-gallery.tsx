"use client";

import { ArrowUpRight, Expand, ExternalLink, FileText, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { Reveal } from "@/components/motion/reveal";
import { credentials, type Credential, type CredentialCategory } from "@/data/portfolio";

const filters: readonly ("All" | CredentialCategory)[] = ["All", "Microsoft", "AI", "GitHub"];

export function CredentialGallery() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const [selected, setSelected] = useState<Credential | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const lastActiveElementRef = useRef<HTMLElement | null>(null);

  const visible = useMemo(
    () =>
      credentials.filter(
        (item) => activeFilter === "All" || item.categories.includes(activeFilter as CredentialCategory)
      ),
    [activeFilter]
  );

  const openModal = (credential: Credential) => {
    lastActiveElementRef.current = (document.activeElement as HTMLElement) || null;
    setSelected(credential);
  };

  const closeModal = () => {
    setSelected(null);
  };

  useEffect(() => {
    if (!selected) {
      if (lastActiveElementRef.current) {
        lastActiveElementRef.current.focus();
        lastActiveElementRef.current = null;
      }
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeModal();
        return;
      }

      if (event.key === "Tab") {
        if (!panelRef.current) return;
        const focusableElements = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Focus the close button once opened
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selected]);

  return (
    <div className="credentials-wrap">
      <div className="credential-filters" role="group" aria-label="Filter credentials by category">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            aria-pressed={activeFilter === filter}
            className={activeFilter === filter ? "is-active" : ""}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="credential-grid">
        {visible.map((credential, index) => (
          <Reveal key={credential.name} delay={index * 0.05} className="credential-card">
            <div
              className="credential-media cursor-pointer group"
              onClick={() => openModal(credential)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openModal(credential);
                }
              }}
              aria-label={`Preview ${credential.name}`}
            >
              <Image
                src={credential.thumbnailPath}
                alt={`${credential.name} credential`}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <span className="credential-expand">
                <Expand aria-hidden="true" /> Preview
              </span>
            </div>
            <div className="credential-info">
              <div>
                <span className="credential-issuer">{credential.issuer}</span>
                <strong>{credential.name}</strong>
                <span className="credential-category">
                  {credential.categories.join(" · ")}
                  {credential.earnedDate ? ` · ${credential.earnedDate}` : ""}
                </span>
              </div>
              <div className="credential-actions">
                <button
                  type="button"
                  onClick={() => openModal(credential)}
                  className="credential-action-btn credential-action-btn--primary"
                  aria-label={`Preview ${credential.name}`}
                >
                  <Expand className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Preview</span>
                </button>
                {credential.credentialUrl ? (
                  <a
                    href={credential.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="credential-action-btn"
                    aria-label={`Verify ${credential.name} online`}
                  >
                    <span>Verify</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      {selected ? (
        <div
          className="credential-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.name} preview`}
          onMouseDown={(event) => event.target === event.currentTarget && closeModal()}
        >
          <div ref={panelRef} className="credential-modal__panel">
            <div className="credential-modal__header">
              <div>
                <span>{selected.issuer}</span>
                <strong>{selected.name}</strong>
              </div>
              <div className="credential-modal__actions">
                {selected.credentialUrl && (
                  <a
                    href={selected.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="modal-action-btn"
                  >
                    <span>Verify online</span>
                    <ExternalLink />
                  </a>
                )}
                {selected.mediaType === "pdf" && (
                  <a
                    href={selected.mediaPath}
                    target="_blank"
                    rel="noreferrer"
                    className="modal-action-btn"
                  >
                    <span>Open PDF</span>
                    <FileText />
                  </a>
                )}
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={closeModal}
                  aria-label="Close credential preview"
                  className="modal-close-btn"
                >
                  <X />
                </button>
              </div>
            </div>
            <div className="credential-modal__media">
              <Image
                src={selected.thumbnailPath}
                alt={`${selected.name} full preview`}
                fill
                sizes="95vw"
                priority
                className="object-contain p-4 sm:p-6"
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
