import dynamic from 'next/dynamic';

const GraphiQLPage = dynamic(
	() =>
		import('./interface/GraphiQLPage').then((mod) => ({
			default: mod.GraphiQLPage,
		})),
	{ ssr: false },
);

export default function GraphqlRoute() {
	return <GraphiQLPage />;
}
