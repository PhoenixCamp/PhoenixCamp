function sessionsFilter(sessions) {
      return sessions.tech.match(/^(erlang|elixir|phoenix|nerves)$/);
}
