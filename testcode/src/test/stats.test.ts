import { max, min, avg, median, mode } from "../components/stats";


describe('여러가지 테스팅', () => {
    it('배열 내 최고 값', () => {
        expect(max([4,3,2,5,3])).toBe(5);
    })

    it('배열 내 최솟값', () => {
        expect(min([123,2,43,5])).toBe(2);
    })

    it('배열 평균값', () => {
        expect(avg([2,4])).toBe(3);
    })
    describe('median', ()=> {
        it('median(홀수 배열)', () => {
            expect(median([1,2,3,4])).toBe(2.5);
        })

        it('median(짝수 배열)', () => {
            expect(median([1,2,3,4,5,6])).toBe(3.5);
        })
    })
    describe('mode', () => {
        it('최빈값', ()=>{
            expect(mode([1,1,2])).toEqual(1);
        })

        it('최빈값 중복 시 null반환',()=>{
            expect(mode([1,1,2,2])).toBe(null);
        })
    })


})