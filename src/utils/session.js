export function getOrCreateVisitorId() {
  let visitorId = localStorage.getItem("visitor_id");
  if (!visitorId) {
    visitorId = "visitor_" + Date.now() + "_" + Math.floor(Math.random() * 1e6);
    localStorage.setItem("visitor_id", visitorId);
  }
  return visitorId;
}
