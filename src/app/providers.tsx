import ReactQueryProvider from '../framework/query/provider';

export default function RootProviders({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <ReactQueryProvider>{children}</ReactQueryProvider>;
}
