"use client";

import Error from "@/components/error";

export default function NotFound() {
  return (
    <Error
      pageName="Page Not Found"
      errorCode="404"
      error="Page Not Found"
      redirectTo="/"
      buttonContent="take me back home"
    />
  );
}
