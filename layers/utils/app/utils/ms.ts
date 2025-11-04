type TimeUnit = "h" | "m" | "s" | "d";
type TimeProp = `${number}${TimeUnit}`;

export const ms = (time: TimeProp) => {
	const timeUnit = time.slice(-1) as TimeUnit;
	const timeValue = Number.parseInt(time.slice(0, -1), 10);

	if (timeUnit === "s") {
		return timeValue * 1000;
	}
	if (timeUnit === "m") {
		return timeValue * 60 * 1000;
	}
	if (timeUnit === "h") {
		return timeValue * 60 * 60 * 1000;
	}
	if (timeUnit === "d") {
		return timeValue * 24 * 60 * 60 * 1000;
	}

	return 0;
};
