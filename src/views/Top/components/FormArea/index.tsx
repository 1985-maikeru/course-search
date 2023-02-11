// libs
import { FormProvider, useForm, useFormContext } from "react-hook-form";
// hooks
import { useRoute } from "@/hooks/useRoute";
// components
import ErrorLabel from "@/components/common/ErrorLabel";

const FormArea = () => {
    const router = useRoute();
    const {
        register,
        formState: { errors },
        trigger,
        getValues
    } = useFormContext();

    const handleSubmit = async () => {
        await trigger();

        const values = getValues();

        if(Object.keys(errors).length !== 0) {
            return;
        }

        if(values.search_keyword) {
            router.push({
                pathname: "/",
                query: {
                    keyword: values.search_keyword,
                },
            });
        } else {
            router.push({
                pathname: "/",
            });
        }
    }

    return (
        <>
            <div className="form_area">
                <div className="input_area">
                    <input
                        type="text"
                        className="search_input"
                        {...register("search_keyword", {
                            // required: { value: true, message: "検索する文字列を入力してください。" },
                            maxLength: { value: 30, message: "30文字以内で入力してください"},
                        })}
                    />
                    <a
                        href="#"
                        className="submit_btn"
                        onClick={(e) => {
                            e.preventDefault();
                            handleSubmit();
                        }}
                    >
                        検索
                    </a>
                </div>
                <ErrorLabel message={errors?.search_keyword?.message} />
            </div>
        </>
    )

}

export default FormArea;
