import { Footer } from '../../framework/layout/Footer';
import { Header } from '../../framework/layout/Header';

export default function AppLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<div className="min-h-full">
				<Header />
				<main className="-mt-24 pb-8">
					<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
						{children}
					</div>
				</main>
				<Footer />
			</div>
		</>
	);
}
