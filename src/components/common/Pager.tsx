// lib
import Pagination from '@mui/material/Pagination';
// hooks
import { useRoute } from "@/hooks/useRoute";

type PROPS = {
    count: number,
    onClickFn?: Function,
    page: number
}
const Pager = ({ count, page }: PROPS) => {
    const router = useRoute();
    const {
        query: {
            keyword = ""
        }
    } = router;

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        router.push({
            pathname: "/",
            query: {
                page: value,
                keyword,
            },
        });
    }

    return (
        <Pagination count={count} page={page} onChange={handleChange} />
    )

}

export default Pager;
