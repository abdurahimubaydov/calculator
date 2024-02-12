import { MdOutlineClear } from "react-icons/md";
import { PiPlusMinusBold } from "react-icons/pi";
import { MdOutlinePercent } from "react-icons/md";
import { RiDivideFill, RiNumber1, RiNumber2, RiEqualFill, RiNumber3, RiNumber4, RiNumber5, RiNumber6, RiNumber7, RiNumber8, RiNumber9 } from "react-icons/ri";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { MdExposureZero } from "react-icons/md";
import { IData } from ".";



const DATA: IData[] = [
    {
        id: 1,
        value: 'clear',
        icon: MdOutlineClear,
        color: 'black'
    },
    {
        id: 2,
        value: '+/-',
        icon: PiPlusMinusBold,
        color: 'black'
    },
    {
        id: 3,
        value: '%',
        icon: MdOutlinePercent,
        color: 'black'
    },
    {
        id: 4,
        value: '/',
        icon: RiDivideFill,
        color: '#5be589'
    },
    // 
    {
        id: 5,
        value: '7',
        icon: RiNumber7,
        color: 'black'
    },
    {
        id: 6,
        value: '8',
        icon: RiNumber8,
        color: 'black'
    },
    {
        id: 7,
        value: '9',
        icon: RiNumber9,
        color: 'black'
    },
    {
        id: 8,
        value: 'x',
        icon: MdOutlineClear,
        color: '#7a95e0'
    },

    // 

    {
        id: 9,
        value: '4',
        icon: RiNumber4,
        color: 'black'
    },
    {
        id: 10,
        value: '5',
        icon: RiNumber5,
        color: 'black'
    },
    {
        id: 11,
        value: '6',
        icon: RiNumber6,
        color: 'black'
    },
    {
        id: 12,
        value: 'x',
        icon: FiMinus,
        color: '#7a95e0'
    },

    // 

    {
        id: 13,
        value: '1',
        icon: RiNumber1,
        color: 'black'
    },
    {
        id: 14,
        value: '2',
        icon: RiNumber2,
        color: 'black'
    },
    {
        id: 15,
        value: '3',
        icon: RiNumber3,
        color: 'black'
    },
    {
        id: 16,
        value: 'x',
        icon: GoPlus,
        color: '#7a95e0'
    },

    // 

    {
        id: 17,
        value: '00',
        icon: MdExposureZero,
        color: 'black'
    },
    {
        id: 18,
        value: '0',
        icon: MdExposureZero,
        color: 'black'
    },
    {
        id: 19,
        value: ',',
        icon: RiNumber3,
        color: 'black'
    },
    {
        id: 20,
        value: 'x',
        icon: RiEqualFill,
        color: '#7a95e0'
    },
]


export default DATA