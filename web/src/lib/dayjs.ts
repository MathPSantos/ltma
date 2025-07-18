import dayJsLib from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/pt-br';

dayJsLib.locale('pt-br');
dayJsLib.extend(relativeTime);

export const dayjs = dayJsLib;
