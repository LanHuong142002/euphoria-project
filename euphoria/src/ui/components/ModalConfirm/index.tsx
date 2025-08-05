import { ReactNode } from 'react';

// Components
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from '../common/Dialog';

interface ModalConfirmProps {
  title: string;
  isOpen?: boolean;
  description: string;
  trigger?: ReactNode;
  onCancel?: () => void;
  onConfirm: () => void;
}

export const ModalConfirm = ({
  isOpen,
  title,
  description,
  trigger,
  onCancel,
  onConfirm,
}: ModalConfirmProps) => (
  <AlertDialog open={isOpen}>
    <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>

    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>{title}</AlertDialogTitle>
        <AlertDialogDescription>{description}</AlertDialogDescription>
      </AlertDialogHeader>

      <AlertDialogFooter>
        <AlertDialogCancel onClick={onCancel}>Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={onConfirm}>Confirm</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);
