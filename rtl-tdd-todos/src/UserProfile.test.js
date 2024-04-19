import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import React from "react";
import { render, waitFor } from "@testing-library/react";
import UserProfile from "./UserProfile";

/**
 * API요청 테스트의 경우 axios-mock-adapter 라이브러리를  사용함.
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
    it('loads userData properly', () => {
      // TODO
    });
  });