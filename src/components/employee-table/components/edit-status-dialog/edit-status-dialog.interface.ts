export interface EditStatusDialogProps {
  userId: string;
  open: boolean;
  onClose: () => void;
  status: string;
  onStatusChange: (status: string) => void;
}
