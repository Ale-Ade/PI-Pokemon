function useCompareAsc(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
}

function useCompareDes(a, b) {
    if (a.name < b.name) return 1;
    if (a.name > b.name) return -1;
    return 0;
}

function useCompareId(a, b) {
    if (parseInt(a.id) < parseInt(b.id)) return -1;
    if (parseInt(a.id) > parseInt(b.id)) return 1;
    return 0;
}

function useCompareAttackAsc(a, b) {
    if (parseInt(a.attack) < parseInt(b.attack)) return -1;
    if (parseInt(a.attack) > parseInt(b.atack)) return 1;
    return 0;
}

function useCompareAttackDes(a, b) {
    if (parseInt(a.attack) < parseInt(b.attack)) return 1;
    if (parseInt(a.attack) > parseInt(b.atack)) return -1;
    return 0;
}

export {
    useCompareAsc,
    useCompareDes,
    useCompareId,
    useCompareAttackAsc,
    useCompareAttackDes,
};
