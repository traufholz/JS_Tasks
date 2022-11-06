function enough(cap, on, wait) {
    const sum = on + wait;
    const difference = sum - cap;
    return (cap >= sum) ? 0 : difference
}