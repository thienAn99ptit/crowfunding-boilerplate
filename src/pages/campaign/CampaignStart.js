import { useForm } from "react-hook-form";
import images from "../../assets/images";
import Field from "../../components/field/Field";
import { MoneyBagIcon } from "../../components/icons/Icons";
import Input from "../../components/input/Input";
import Label from "../../components/label/Label";
function CampaignStart() {
  const { control, handleSubmit } = useForm({ defaultValues: {} });
  return (
    <div className="bg-white rounded-sm py-10 px-[66px] ">
      <div className="text-center mb-10">
        <h1 className="inline-flex gap-x-[10px] items-center px-[60px] py-4  bg-[#B2B3BD] text-text2 font-bold text-[25px] rounded-[10px] ">
          Start a Campaign{" "}
          <img src={images.rocket} alt="" className="w-7 h-7 object-cover" />
        </h1>
      </div>
      <form>
        <div className="flex gap-x-[45px]">
          <Field className="w-[550px]">
            <Label>Campaign Titel *</Label>
            <Input
              name="title"
              control={control}
              placeholder="Write a titel"
            ></Input>
          </Field>
          <Field className="flex-1">
            <Label>Select a category *</Label>
            <select
              name="category"
              className="py-[15px] px-[25px] rounded-[10px] border-strock border text-text4 outline-none"
            >
              <option value="">Select a category</option>
              <option value="film">film</option>
              <option value="film">film</option>
              <option value="film">film</option>
            </select>
          </Field>
        </div>
        <Field>
          <Label>Short Description *</Label>
          <textarea
            placeholder="Write a short description...."
            className="px-[25px] py-[15px] rounded-[10px] border border-strock text-text4 outline-none resize-none h-[140px]"
          ></textarea>
        </Field>
        <Field className="mb-10">
          <Label>Story *</Label>
          <textarea
            placeholder="Write a short description...."
            className="px-[25px] py-[15px] rounded-[10px] border border-strock text-text4 outline-none resize-none h-[420px]"
          ></textarea>
        </Field>
        <div className="px-[30px] py-[45px] bg-[#8C6DFD] rounded-[10px] text-[25px] font-bold text-white mb-10 flex items-center gap-x-[20px]">
          <MoneyBagIcon />
          You will get 90% of total raised
        </div>
        <div className="grid grid-cols-2 gap-x-[45px]">
          <Field>
            <Label>Goal *</Label>
            <Input placeholder="$0.00 USD" control={control}></Input>
          </Field>
          <Field>
            <Label>Raised Amount *</Label>
            <Input placeholder="$0.00 USD" control={control}></Input>
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-x-[45px]">
          <Field>
            <Label>Amount Prefilled</Label>
            <Input placeholder="Amount Prefilled" control={control}></Input>
            <p className="text-sm font-medium text-text3 mb-[15px]">
              It will help fill amount box by click, place each amount by comma,
              ex: 10,20,30,40
            </p>
          </Field>
          <Field>
            <Label>Video</Label>
            <Input placeholder="Video" control={control}></Input>
            <p className="text-sm font-medium text-text3 mb-[15px]">
              Place Youtube or Vimeo Video URL
            </p>
          </Field>
        </div>
        <div className="flex gap-x-[144px]">
          <Field className="w-[412px]">
            <Label>Campaign End Method</Label>
            <select
              name="category"
              className="py-[15px] px-[25px] rounded-[10px] border-strock border text-text4 outline-none"
            >
              <option value="">Select One</option>
              <option value="film">film</option>
              <option value="film">film</option>
              <option value="film">film</option>
            </select>
          </Field>
          <Field className="w-[412px]">
            <Label>Counrty</Label>
            <select
              name="category"
              className="py-[15px] px-[25px] rounded-[10px] border-strock border text-text4 outline-none"
            >
              <option value="">Select a counrty</option>
              <option value="film">film</option>
            </select>
          </Field>
        </div>
      </form>
    </div>
  );
}

export default CampaignStart;
