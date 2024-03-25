/**
 * Retruns a promise that will resolve after the specified number of milliseconds
 *
 * @param ms Number of milliseconds to wait for
 */
export function delay(ms: number): Promise<void> {
	return new Promise<void>((resolve) => {
		setTimeout(resolve, ms);
	});
}
