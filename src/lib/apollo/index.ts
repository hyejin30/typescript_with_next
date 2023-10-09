import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { useMemo } from "react";

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink({ uri: process.env.NEXT_PUBLIC_API_ENDPOINT }),
    cache: new InMemoryCache({}),
  });
};

const initApollo = (initialState = {}) => {
  const client = apolloClient || createApolloClient();
  // client 인스턴스 중복 생성 방지. 없으면 만든다

  if (initialState) {
    client.cache.restore({
      ...client.extract(),
      ...initialState,
    });
  }

  if (typeof window === "undefined") {
    return client;
  }

  if (!apolloClient) {
    apolloClient = client;
  }

  return client;
};

export const useApollo = (initialState = {}) => {
  return useMemo(() => initApollo(initialState), [initialState]);
};
