import CounterForRenderProps from "./CounterForRenderProps";
import HoverCounterForRenderProps from "./HoverCounterForRenderProps";
import RenderPropsCounter from "./RenderPropsCounter";

export default function GeneralCounterForRenderProps(){

    return(
        <>
        <RenderPropsCounter render={(count,handleInput)=> (<CounterForRenderProps count={count} handleInput={handleInput} />)}/>
        <RenderPropsCounter render={(count,handleInput)=> (<HoverCounterForRenderProps count={count} handleInput={handleInput} />)}/>
        </>
    )

};