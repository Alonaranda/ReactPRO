import './mylabel.css';
import { AllCaps } from '../stories/components/MyLabel.stories';

export interface MyLabelProps {
  /**
   * Este es el mensaje
   */
  label: string;
  /**
   * Este es el tamaño
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * Transformar todo a Uppercase
   */
  allCaps?: boolean;
  /**
   * Este es el color
   */
  color?: 'primary' | 'secondary' | 'tertiary',
  /**
   * Este es el fontColor
   */
   fontColor?: string

}

export const MyLabel = ({
  allCaps = false,
  color = 'primary',
  label = 'Add label',
  size = 'normal',
  fontColor,
}: MyLabelProps) => {
  return (
    <span className={`label ${size} text-${color} ${allCaps && 'capitalizer' } `}
    style={{color: fontColor}}>
        { allCaps ? label.toLocaleUpperCase() : label }
    </span>
  )
}
