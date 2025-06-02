import { useDispatch, useSelector } from 'react-redux'
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faEraser, faRotateLeft, faRotateRight, faFileArrowDown } from '@fortawesome/free-solid-svg-icons'

import styles from '@/styles/index.module.css'

import { menuItemClick, actionItemClick } from '@/slice/menuSlice'

import { MENU_ITEMS } from '@/constants'

const Menu = () => {
    const dispatch = useDispatch()
    const activeMenuItem = useSelector((state) => state.menu.activeMenuItem)
    
    const handleMenuClick = (itemName) => {
        dispatch(menuItemClick(itemName))
    }

    const handleActioItemClick = (itemName) => {
        dispatch(actionItemClick(itemName))
    }
    
    return (
        <div className={styles.menu}>
            <div className={cx(styles.menuItem, {[styles.active]: activeMenuItem === MENU_ITEMS.PENCIL})} onClick={() => handleMenuClick(MENU_ITEMS.PENCIL)}>
                <FontAwesomeIcon icon={faPencil} />
            </div>
            <div className={cx(styles.menuItem, {[styles.active]: activeMenuItem === MENU_ITEMS.ERASER})} onClick={() => handleMenuClick(MENU_ITEMS.ERASER)}>
                <FontAwesomeIcon icon={faEraser} />
            </div>
            <div className={styles.menuItem} onClick={() => handleActioItemClick(MENU_ITEMS.UNDO)}>
                <FontAwesomeIcon icon={faRotateLeft} />
            </div>
            <div className={styles.menuItem} onClick={() => handleActioItemClick(MENU_ITEMS.REDO)}>
                <FontAwesomeIcon icon={faRotateRight} />
            </div>
            <div className={styles.menuItem} onClick={() => handleActioItemClick(MENU_ITEMS.DOWNLOAD)}>
                <FontAwesomeIcon icon={faFileArrowDown} />
            </div>
        </div>
    )
}

export default Menu;