import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import React from "react";
import { render, waitFor } from "@testing-library/react";
import UserProfile from "./UserProfile";

/**
 * API요청 테스트의 경우 axios-mock-adapter 라이브러리를  사용함.
 * 테스트 실행 중 import에러가 발생하기 때문에 테스트가 불가함***
 */

describe('<UserProfile />', () => {
    const mock = new MockAdapter(axios, { delayResponse: 200 }); // 200ms 가짜 딜레이 설정
    // API 요청에 대하여 응답 미리 정하기
    mock.onGet('https://jsonplaceholder.typicode.com/users/1').reply(200, {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496'
        }
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets'
      }
    });
    it('loads userData properly', async () => {
      const { getByText } = render(<UserProfile id={1}/>);
      await waitFor(() => getByText("로딩중.."));
      await waitFor(() => getByText("Bret"));
    });
  });

  /**
   * axios-mock-adapter 활용방법
   * 
   *  1. 한번만 mocking하기
   *        mock.onGet('/users').replyOnce(200, user)
   *        딱 한번만 mocking 함.
   * 
   *  2. replyOnce를 연달아 사용하기
   *        mock
   *          .onGet('/users')
   *          .replyOnce(200, user)
   *          .onGet('/users')
   *          .replyOnce(500)
   * 
   *  3. 아무요청(GET 또는 POST) mocking하기
   *        mock.onAny('/users').reply(200)
   * 
   *  4. reset
   *        mock.reset();
   *        reset은 mock 인스턴스에 등록된 모든 mock 핸들러를 제거함. 테스트 케이스별로 다른 mock설정을 하고 싶을 때 사용하면 됨,.
   * 
   *  5. restore
   *        mock.restore()
   *        restore은 axios에서 mocking 기능을 완전히 제거합니다. 만약에 실제 테스트 를 하다가 요청이 실제로 날라가게 하고 싶으면 이 함수를  사용하면됨
   */

  //!!!!!!!!!!!!!!! 테스트 코드를 작성하려면 꼭 참고하세요~!!!!!!!!!!!!!!!!!!!!