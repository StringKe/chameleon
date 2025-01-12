import { CMaterialType } from '@chamn/model';
import { ButtonMeta } from './button';
import { ColMeta } from './col';
import { InputMeta } from './input';
import { ModalMeta } from './modal';
import { DivMeta } from './native';
import { RowMeta } from './row';
import { TableMeta } from './table';

export const Material: CMaterialType[] = [TableMeta, ModalMeta, ButtonMeta];
