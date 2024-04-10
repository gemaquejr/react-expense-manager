import * as C from './styles'
import { Item } from '../../types/Item'
import { TableItem } from '../TableItem'

type Props = {
    list: Item[];
    isNewItemAdded: boolean;
    onEdit: (item: Item) => void;
    onDelete: (itemId: number) => void;
}

export const TableArea = ({ list, isNewItemAdded, onEdit, onDelete }: Props) => {
    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
                    <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn>Titulo</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
                    {isNewItemAdded && (
                    <>
                        <C.TableHeadColumn>Editar</C.TableHeadColumn>
                        <C.TableHeadColumn>Deletar</C.TableHeadColumn>
                    </>
                )}
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                    <TableItem key={index} item={item} onEdit={() => onEdit(item)} onDelete={() => onDelete(index)} />
                ))}
            </tbody>
        </C.Table>
    );
}