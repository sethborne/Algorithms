function centuryFromYear(year) {
    let count = 1;
    while (year > 100) {
        year -= 100;
        count += 1;
    }
    return count;
}