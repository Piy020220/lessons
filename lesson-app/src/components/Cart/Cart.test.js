import { products } from '../Examples/dataFile';
import {switchFun, switchTestDlyaVlada, cartReducer} from './utils'


describe('switchTestDlyaVlada', () => {
    it('should return Katya for Peter', () => {
        expect(switchTestDlyaVlada('Peter')).toBe('Katya')
    })

    it('should return Lera for Vlad', () => {
        expect(switchTestDlyaVlada('Vlad')).toBe('Lera')
    })

    it('should return Ruka for Valera', () => {
        expect(switchTestDlyaVlada('Valera')).toBe('Ruka')
    })

    it('should return Drochka for all the drochers', () => {
        expect(switchTestDlyaVlada('eblan')).toBe('Drochka')
        expect(switchTestDlyaVlada('huesos')).toBe('Drochka')
        expect(switchTestDlyaVlada('kamapulya')).toBe('Drochka')
        expect(switchTestDlyaVlada('')).toBe('Drochka')
        expect(switchTestDlyaVlada('huy')).toBe('Drochka')
        expect(switchTestDlyaVlada('loh')).toBe('Drochka')
        expect(switchTestDlyaVlada('daun')).toBe('Drochka')
        expect(switchTestDlyaVlada('nusho')).toBe('Drochka')
    })
})


describe('swithFun', () => {
    it('should update size', () => {
        
        const result = switchFun(products[0], {type: 'UPDATE_SIZE', payload: {size: 'M'}})
        
        expect(result.size).toBe('M')
        expect(result.id).toBe(1)
    })

    it('should update color', () => {
        
        const result = switchFun(products[0], {type: 'UPDATE_COLOR', payload: {color: 'black'}})
        
        expect(result.color).toBe('black')
        expect(result.id).toBe(1)
    })
})  

describe('cartReducer', () => {

    const testCart = {
        userName: '',
        userAddress: '',
        products: []
    }
    
    it('should add user name', () => {
        
        const action = {
            type: 'CHANGE_NAME',
            payload: {
                name: 'Vladik yopta'
            }
        }
        const newCart = cartReducer(testCart, action)
        
        expect(newCart).toEqual({
            userName: 'Vladik yopta',
            userAddress: '',
            products: []
        })
    })

    it('should add user address', () => {
        
        const action = {
            type: 'CHANGE_ADDRESS',
            payload: {
                address: 'Damrota 1'
            }
        }
        const newCart = cartReducer(testCart, action)
        
        expect(newCart).toEqual({
            userName: '',
            userAddress: 'Damrota 1',
            products: []
        })
    })

    it('should add product', () => {
        
        const action = {
            type: 'ADD_PRODUCT',
            payload: {
                product: {id: 12, name: 'IPODS PRO MAX'}
            }
        }
        const newCart = cartReducer(testCart, action)
        
        expect(newCart).toEqual({
            userName: '',
            userAddress: '',
            products: [{id: 12, name: 'IPODS PRO MAX'}]
        })
    })

    it('should remove product', () => {
        
        const startCart = {
            userName: 'Petro',
            userAddress: '',
            products: [{id: 12, name: 'IPODS PRO MAX'}, {id: 1, name: 'Samsung'}]
        }

        const action = {
            type: 'REMOVE_PRODUCT',
            payload: {
                productId: 12
            }
        }
        const newCart = cartReducer(startCart, action)
        
        expect(newCart).toEqual({
            userName: 'Petro',
            userAddress: '',
            products: [{id: 1, name: 'Samsung'}]
        })
    })
})