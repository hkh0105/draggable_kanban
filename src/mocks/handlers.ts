import { rest } from 'msw';
import { PATH } from '@src/constant/path';

const BASE_URL = process.env.NEXT_PUBLIC_TEST_SERVER;
export const handlers = [
  rest.get('https://example.dev/' + PATH.getTodo, (req, res, ctx) => {
    console.log(req);
    console.log(BASE_URL + PATH.getTodo);
    // console.log('HERE IS TEST', req);

    return res(ctx.json({}));
  }),
];
