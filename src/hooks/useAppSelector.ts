import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootSate } from '../store';

export const useAppSelector: TypedUseSelectorHook<RootSate> = useSelector;
