export const formatRelativeTime = (date: Date) => {
    const now = new Date();
    const diffInMilliseconds = date.getTime() - now.getTime();

    type Unit = {
        unit: Intl.RelativeTimeFormatUnit;
        milliseconds: number;
    };

    // Correct millisecond values for each unit
    const units: Unit[] = [
        { unit: 'year', milliseconds: 1000 * 60 * 60 * 24 * 365 },
        { unit: 'month', milliseconds: 1000 * 60 * 60 * 24 * 30 },
        { unit: 'day', milliseconds: 1000 * 60 * 60 * 24 },
        { unit: 'hour', milliseconds: 1000 * 60 * 60 },
        { unit: 'minute', milliseconds: 1000 * 60 },
        { unit: 'second', milliseconds: 1000 }
    ];

    // Find the most relevant time unit
    for (const { unit, milliseconds } of units) {
        const value = Math.floor(diffInMilliseconds / milliseconds);
        if (Math.abs(value) >= 1) {
            return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(value, unit);
        }
    }

    // If the difference is less than 1 second
    return 'just now';
};
