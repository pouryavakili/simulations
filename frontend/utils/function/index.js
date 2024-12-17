export function formatNumberWithUnit(num) {
    const absNum = Math.abs(num); // Get the absolute value to handle negative numbers
    // Check for trillions
    if (absNum >= 1_000_000_000_000) {
      return (num / 1_000_000_000_000).toFixed(2) + 't';
    }
    // Check for billions
    else if (absNum >= 1_000_000_000) {
      return (num / 1_000_000_000).toFixed(2) + 'b';
    }
    // Check for millions
    else if (absNum >= 1_000_000) {
      return (num / 1_000_000).toFixed(2) + 'm';
    }
    // Check for thousands
    else if (absNum >= 1_000) {
      return (num / 1_000).toFixed(2) + 'k';
    }
    // For smaller numbers, display with two decimal places
    else {
      return num;
    }
  }