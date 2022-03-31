import React from 'react';
import { EthRates, WalletBar } from '@components/ui/web3';
import BreadCrumbs from '@components/ui/common/breadcrumbs';

const LINKS = [
  {
    href: '/marketplace',
    value: 'Buy',
  },
  {
    href: '/marketplace/courses/owned',
    value: 'My Courses',
  },
  {
    href: '/marketplace/courses/manage',
    value: 'Manage Courses',
  },
];

export default function Header() {
  return (
    <>
      <WalletBar />
      <EthRates />
      <div className="flex flex-row-reverse pb-4 px-4 sm:px-6 lg:px-8">
        <BreadCrumbs items={LINKS} />
      </div>
    </>
  );
}
