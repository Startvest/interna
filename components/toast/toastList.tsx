export interface Itoast {
  title?: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info' | 'primary';
}
