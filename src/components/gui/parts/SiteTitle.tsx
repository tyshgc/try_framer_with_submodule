import * as React from "react";
import styled from "@emotion/styled";

/**
 * gui/ parts/ SiteTitle
 * サイトタイトルの表示をするコンポーネント。
 * @param props.value (string?) タイトルのテキスト
 */
export function SiteTitle(props: IProps) {
  const { value } = props;
  return (
    <SHeading className="title">
      Welcome to <a href="https://nextjs.org">{value || "Next.js!"}</a>
    </SHeading>
  );
}

const SHeading = styled.h1`
  text-align: center;
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;

  & > a {
    text-decoration: underline;

    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
    }
  }
`;

interface IProps {
  value?: string;
}
