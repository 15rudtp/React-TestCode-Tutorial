import { sum, sumOf } from '../components/sum';



it('정수의 합', () => {
    expect(sum(1,2)).toBe(3);
});

it('배열의 합', ()=> {
    expect(sumOf([1,2,3,4,5])).toBe(15)
})


/**
 * 이렇게 describe으로 묶어서 테스팅 가능함.
 * 굳이 묶어서 하는 이유는 여러 테스트가 실행 되었을 때 
 * 터미널의 가독성 향상을 위함이 보임
 */
describe('정수의 합과 배열의 합', ()=> {
    it('정수의 합', () => {
        expect(sum(5,6)).toBe(11);
    })
    it('배열의 합', () => {
        expect(sumOf([1000,2000])).toBe(3000);
    })
})