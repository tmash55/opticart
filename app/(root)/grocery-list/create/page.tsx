import GroceryListForm from "@/components/shared/GroceryListForm";
import EventForm from "@/components/shared/GroceryListForm";
import { auth } from "@clerk/nextjs";

const CreateGroceryList = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;
  console.log(userId);
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Create Event
        </h3>
      </section>

      <div className="wrapper my-8">
        <GroceryListForm userId={userId} type="Create" />
      </div>
    </>
  );
};

export default CreateGroceryList;
