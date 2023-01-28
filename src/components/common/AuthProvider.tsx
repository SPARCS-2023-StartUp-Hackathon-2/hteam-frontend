import { useLocalStorage } from "@mantine/hooks";
import { createContext, ReactNode, useCallback, useContext, useMemo } from "react";

interface AxiosAuthHeader {
  headers: {
    Authorization: string;
  };
}

interface AuthContextValue {
  token?: string;
  login: (token: string) => void;
  logout: () => void;
  loggedIn: boolean;
  axiosAuthHeader?: AxiosAuthHeader;
}

const AuthContext = createContext<AuthContextValue | null>(null);

interface Props {
  children: ReactNode;
}

export function AuthProvider({ children }: Props) {
  const [token, setToken, removeToken] = useLocalStorage<string | undefined>({
    key: "jwt",
    defaultValue: undefined,
  });

  const login = useCallback(
    (token: string) => {
      setToken(token);
    },
    [setToken]
  );

  const logout = useCallback(() => {
    removeToken();
    window.location.reload();
  }, [removeToken]);

  const axiosAuthHeader = useMemo<AxiosAuthHeader | undefined>(() => {
    if (token) {
      return {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    } else {
      return undefined;
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{ token, login, logout, loggedIn: token ? true : false, axiosAuthHeader }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context == null) {
    throw new Error("AuthProvider 안에서 사용해주세요");
  }

  return context;
}
