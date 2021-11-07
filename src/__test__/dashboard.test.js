/* eslint-disable jest/valid-expect */
/* eslint-disable no-undef */
import DetailRequest from "components/dashboard/home/part/detailRequest";
import { render, screen } from "@testing-library/react";
//import { render, screen, waitForElementToBeRemoved } from "test/app-test-utils";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import { Hooks } from "providers";
import { useState } from "react";
test("User can see the page dashboard crypto", async () => {
  const Wrapper = () => {
    const queryClient = new QueryClient();
    return (
      <>
        <Hooks.Provider>
          <QueryClientProvider client={queryClient}>
            <DetailRequest />
          </QueryClientProvider>
        </Hooks.Provider>
      </>
    );
  };
  render(<Wrapper />);

  expect(
    screen.getByRole("toolbar", { name: /table toolbar/i })
  ).toBeInTheDocument();
});
