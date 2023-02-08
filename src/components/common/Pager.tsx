// lib
import Pagination from '@mui/material/Pagination';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from "axios";
// hooks
import { useRoute } from "@/hooks/useRoute";

type PROPS = {
    count: number,
    onClickFn?: Function,
    page: number
}
const Pager = ({ count, page }: PROPS) => {
    const router = useRoute();

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        router.push(`/?page=${value}`);
    }

    return (
        <Pagination count={count} page={page} onChange={handleChange} />
    )

}

export default Pager;
