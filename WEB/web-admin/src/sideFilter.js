import * as React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOnOutlined';
import MailIcon from '@material-ui/icons/MailOutline';
import LocalOfferIcon from '@material-ui/icons/LocalOfferOutlined';
import { FilterList, FilterListItem } from 'react-admin';
import {
    endOfYesterday,
    startOfWeek,
    subWeeks,
    startOfMonth,
    subMonths,
} from 'date-fns';

export const LastVisitedFilter = () => (
    <FilterList label="최근 날짜들" icon={<AccessTimeIcon />}>
        <FilterListItem
            label="오늘"
            value={{
                last_seen_gte: endOfYesterday().toISOString(),
                last_seen_lte: undefined,
            }}
        />
        <FilterListItem
            label="어제"
            value={{
                last_seen_gte: startOfWeek(new Date()).toISOString(),
                last_seen_lte: undefined,
            }}
        />
        <FilterListItem
            label="날짜 SEARCH TAB"
            value={{
                last_seen_gte: subWeeks(startOfWeek(new Date()), 1).toISOString(),
                last_seen_lte: startOfWeek(new Date()).toISOString(),
            }}
        />
    </FilterList>
);
export const HasOrderedFilter = () => (
    <FilterList
        label="신원확인여부"
        icon={<MonetizationOnIcon />}
    >
        <FilterListItem
            label="신원확인된 인원"
            value={{
                nb_commands_gte: 1,
                nb_commands_lte: undefined,
            }}
        />
        <FilterListItem
            label="신원미상 인원"
            value={{
                nb_commands_gte: undefined,
                nb_commands_lte: 0,
            }}
        />
    </FilterList>
);
