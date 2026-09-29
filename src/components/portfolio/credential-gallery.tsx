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

  const visible = useMemo(
    () =>
      credentials.filter(
        (item) => activeFilter === "All" || item.categories.includes(activeFilter as CredentialCategory)
      ),
    [activeFilter]
  );

  useEffect(() => {
    if (!selected) return;
    const previousOverflow = document.body.style.overflow;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setSelected(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", close);
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", close);
    };
  }, [selected]);

  return (
    <div className="credentials-wrap">
      <div className="credential-filters" role="tablist" aria-label="Filter credentials">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            role="tab"
            aria-selected={activeFilter === filter}
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
            <div className="credential-media">
              <Image
                src={credential.thumbnailPath}
                alt={`${credential.name} credential`}
                fill
                sizes="(max-width: 540px) 84vw, (max-width: 1100px) 50vw, 25vw"
                className="object-contain p-2.5 transition-transform duration-300 hover:scale-[1.02]"
              />
              <button
                type="button"
                className="credential-preview-trigger"
                onClick={() => setSelected(credential)}
                aria-label={`Preview ${credential.name}`}
              >
                <span className="credential-expand">
                  <Expand aria-hidden="true" /> Preview
                </span>
              </button>
            </div>
            <div className="credential-info">
              <div>
                <span>{credential.issuer}</span>
                <strong>{credential.name}</strong>
                <small>{credential.categories.join(" · ")}</small>
              </div>
              <div className="credential-actions">
                {credential.credentialUrl ? (
                  <a
                    href={credential.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${credential.name} verification`}
                  >
                    View credential <ArrowUpRight />
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => setSelected(credential)}
                    aria-label={`Preview ${credential.name}`}
                  >
                    View credential <Expand />
                  </button>
                )}
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
          onMouseDown={(event) => event.target === event.currentTarget && setSelected(null)}
        >
          <div className="credential-modal__panel">
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
                  onClick={() => setSelected(null)}
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
