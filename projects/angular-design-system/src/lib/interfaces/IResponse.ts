export interface Response {
  data: any;
  error: { exceptionMessage: string, innerExceptionMessage: string };
  message: string;
  success: boolean;
}

export interface ResponsePaginado {
  totalRegistros: number;
  paginaAtual: number;
  totalPaginas: number;
  dados: any[] | null;
  mensagem: string;
}

export const ResponsePaginado: ResponsePaginado = {
  totalRegistros: 0,
  paginaAtual: 1,
  totalPaginas: 0,
  dados: null,
  mensagem: '',
}
