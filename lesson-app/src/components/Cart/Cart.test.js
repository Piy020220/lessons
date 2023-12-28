import { products } from '../Examples/dataFile';
import {switchFun, switchTestDlyaVlada} from './Cart'


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