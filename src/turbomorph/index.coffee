#= require morphdom/dist/morphdom-umd

Turbolinks.controller.view.renderSnapshot = (newSnapshot, callback) ->
  currentSnapshot = @getSnapshot({ clone: false })

  unless currentSnapshot.hasSameTrackedHeadElementsAsSnapshot(newSnapshot)
    @delegate.viewInvalidated()
    return false

  for element in newSnapshot.getInlineHeadElementsNotPresentInSnapshot(currentSnapshot)
    document.head.appendChild(element.cloneNode(true))

  for element in currentSnapshot.getTemporaryHeadElements()
    document.head.removeChild(element)

  for element in newSnapshot.getTemporaryHeadElements()
    document.head.appendChild(element.cloneNode(true))

  newBody = newSnapshot.body.cloneNode(true)
  @delegate.viewWillRender(newBody)

  importPermanentElementsIntoBody(newBody)

  morphdom(document.body, newBody)

  focusFirstAutofocusableElement()
  callback?()
  @delegate.viewRendered()

importPermanentElementsIntoBody = (newBody) ->
  for newChild in getPermanentElements(document.body)
    if oldChild = newBody.querySelector("[id='#{newChild.id}']")
      oldChild.parentNode.replaceChild(newChild, oldChild)

getPermanentElements = (element) ->
  element.querySelectorAll("[id][data-turbolinks-permanent]")


focusFirstAutofocusableElement = ->
  document.body.querySelector("[autofocus]")?.focus()
#
# do ->
#   Turbolinks.controller = controller = new Turbolinks.Controller
#   controller.adapter = new Turbolinks.BrowserAdapter(controller)
#   controller.start()
