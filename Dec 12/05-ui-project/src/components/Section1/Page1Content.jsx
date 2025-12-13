import LeftContent from "./LeftContent"
import RightContent from "./RightContent"

const Page1Content = () => {
  return (
    <div className="h-[90vh] justify-between py-10 items-center gap-10 bg-amber-700 flex px-18">
      <LeftContent />
      <RightContent />
    </div>
  )
}

export default Page1Content
