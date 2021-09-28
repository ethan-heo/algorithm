/*
Q. 멜론에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 한다.

노래는 인덱스 구분하며, 노래를 수록하는 기준은 다음과 같다.

속한 노래가 많이 재생된 장르를 먼저 수록한다.
장르 내에서 많이 재생된 노래를 먼저 수록한다.
장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록한다.

노래의 장르를 나타내는 문자열 배열 genres와
노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때,

베스트 앨범에 들어갈 노래의 인덱스를 순서대로 반환하시오.

*/

type GenreTotalPlayMap = Record<string, number>;
type GenreTotalPlayTupple = [string, number];
type GenreIndexPlayMap = Record<string, [number, number][]>;
type GenreIndexPlayTupple = [number, number];

const sortGenreTotalPlayAsc = (
    a: GenreTotalPlayTupple,
    b: GenreTotalPlayTupple
) => b[1] - a[1];

const sortGenreIndexPlayAsc = (
    a: GenreIndexPlayTupple,
    b: GenreIndexPlayTupple
) => b[1] - a[1];

export const mellon = (genres: string[], plays: number[]) => {
    const genreTotalPlayMap: GenreTotalPlayMap = {};
    const genreIndexPlayMap: GenreIndexPlayMap = {};

    genres.forEach((genre, idx) => {
        if (!genreTotalPlayMap[genre]) {
            genreTotalPlayMap[genre] = plays[idx];
            genreIndexPlayMap[genre] = [[idx, plays[idx]]];
        } else {
            genreTotalPlayMap[genre] += plays[idx];
            genreIndexPlayMap[genre].push([idx, plays[idx]]);
        }
    });

    const sortedGenereTotalPlay = Object.entries(genreTotalPlayMap).sort(
        sortGenreTotalPlayAsc
    );

    const result = [];

    for (const [genre] of sortedGenereTotalPlay) {
        const sortedIndexPlayArray = genreIndexPlayMap[genre].sort(
            sortGenreIndexPlayAsc
        );

        for (let i = 0; i < 2; i++) {
            if (sortedIndexPlayArray[i]) {
                result.push(sortedIndexPlayArray[i][0]);
            }
        }
    }

    return result;
};
