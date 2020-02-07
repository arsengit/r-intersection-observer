/**
 * @funtion ExampleComponent
 */

import * as React from 'react'

export interface IIntersectionObserverProps
{
  rootMargin?: string;
  threshold?: number;
  root?: JSX.Element | any;
  callBack?: (isIntesecting?: boolean, entry?: IntersectionObserverEntry, sectionRef?: React.MutableRefObject<any>) => void;
  className?: string;
  onlyOnce?: boolean;
  onlyCallBack?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactChild | ChildNode | any
}

function Observer(props: IIntersectionObserverProps)
{
  let [inView, setInview] = React.useState<any>(null);
  let sectionRef = React.useRef<any>(null);
  let { rootMargin, threshold, root, callBack, className, style } = props;
  let onlyCallback = false || props.onlyCallBack;
  let onlyOnce = true || props.onlyOnce;
  let options = {
    root,
    rootMargin,
    threshold
  }
  React.useEffect(() =>
  {
    if (typeof (window as any).IntersectionObserver === "undefined")
    {
      import("intersection-observer" as any).then(() =>
      {
        observeSection()
      })
    }
    else
    {
      observeSection()
    }
  }, [])

  return (
    <div style={style || {}} className={className || ""} ref={sectionRef}>
      {props.children(inView)}
    </div>
  )


  function observeSection()
  {
    let observer = new IntersectionObserver(entries =>
    {
      entries.forEach(entry =>
      {
        intersectingHandler(entry.isIntersecting, entry);
      });
    }, options);
    if (sectionRef.current)
    {
      observer.observe(sectionRef.current)
    }
  }
  function intersectingHandler(isIntersecting: boolean, entry: IntersectionObserverEntry)
  {
    if (onlyCallback)
    {
      if (callBack)
      {
        callBack(isIntersecting, entry, sectionRef)
      }
    }
    else
    {
      if (isIntersecting)
      {
        setInview(true)
      }
      else
      {
        if (!onlyOnce)
        {
          setInview(false)
        }
      }
      if (callBack)
      {
        callBack(isIntersecting, entry, sectionRef)
      }
    }
  }
}

export default React.memo(Observer);
