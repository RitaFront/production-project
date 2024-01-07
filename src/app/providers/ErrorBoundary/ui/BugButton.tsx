import React, { useEffect, useState } from "react";
import { Button } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

// компонент для тестирования ErrorBoundary
export const BugButton = () => {
  const { t } = useTranslation();
  const [error, serError] = useState(false);
  const throwError = () => {
    serError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);
  return <Button onClick={throwError}>{t("throw error")}</Button>;
};
