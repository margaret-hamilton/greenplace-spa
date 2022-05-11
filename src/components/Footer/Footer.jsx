import React from 'react';

import { FooterBrand } from './FooterBrand';
import { FooterCopyright } from './FooterCopyright';
import { FooterSitemap } from './FooterSitemap';
import { FooterTeamMembers } from './FooterTeamMembers';

export default function Footer() {
  return (
    <div>
      <footer className="section-footer bg-light shadow">
        <div className="container">
          <section className="footer-main padding-y">
            <div className="row">
              <FooterBrand />

              <FooterSitemap />

              <FooterTeamMembers />
            </div>
          </section>

          <FooterCopyright />
        </div>
      </footer>
    </div>
  );
}
