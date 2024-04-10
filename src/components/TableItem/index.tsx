import * as C from './styles';
import { Item } from '../../types/Item';
import { formatDate } from '../../helpers/dateFilter';
import { categories } from '../../data/categories';

type Props = {
    item: Item;
    onEdit: () => void;
    onDelete: () => void;
}

export const TableItem = ({ item, onEdit, onDelete }: Props) => {
    return (
        <C.TableLine> 
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>          
            <C.TableColumn>
                <C.Value color={categories[item.category].expense ? 'red' : 'green'}>
                    R$ {item.value}
                </C.Value>
            </C.TableColumn>
            {onEdit && onDelete && (
                <>
                    <C.TableColumn>
                        <button onClick={onEdit}>Editar</button>
                    </C.TableColumn>
                    <C.TableColumn>
                        <button onClick={onDelete}>Deletar</button>
                    </C.TableColumn>
                </>
            )}                                  
        </C.TableLine>
    )
}