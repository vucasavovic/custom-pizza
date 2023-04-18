

export function useMath(){

    const roundFl = function(num,places) {
        return +(Math.round(num + "e+" + places)  + "e-" + places);
    }

    return {roundFl}
}