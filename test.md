<h1 id="bot support commands">Bot Support Commands</h1>

<p><strong>General</strong></p>
<ul>
  <li><code class="highlighter-rouge">io.eval         :: Evaluates arbitrary Javascript. Reserved for bot owner.</code></li>
  <li><code class="highlighter-rouge">io.reboot       :: Reboots the bot.</code></li>
</ul>

<p><strong>Guild</strong></p>
<ul>
  <li><code class="highlighter-rouge">io.joinguild    :: Generates an invite for you to join the guild by id.</code></li>
  <li><code class="highlighter-rouge">io.leaveGuild   :: Makes the bot leave a guild, Reason Required.</code></li>
  <li><code class="highlighter-rouge">io.randomguild  :: Returns a random guild's information.</code></li>
</ul>

<h1 id="developer commands">Developer Commands</h1>

<p><strong>General</strong></p>
<ul>
  <li><code class="highlighter-rouge">io.announce     :: Global announcement to all servers.</code></li>
  <li><code class="highlighter-rouge">io.dbupdate     :: Update server count on discordbots.org.</code></li>
  <li><code class="highlighter-rouge">io.reload       :: Reloads the command file, if it's been updated or modified.</code></li>
  <li><code class="highlighter-rouge">io.setAvatar    :: Changes the bots avatar.</code></li>
  <li><code class="highlighter-rouge">io.setUsername  :: Changes the bot's username.</code></li>
</ul>

<p><strong>Pieces</strong></p>
<ul>
  <li><code class="highlighter-rouge">io.download     :: Downloads a piece, either from a link or our Pieces Repository, and installs it.</code></li>
  <li><code class="highlighter-rouge">io.transfer     :: Transfers a core piece to its respected folder.</code></li>
</ul>

<h1 id="fun commands">Fun Commands</h1>

<p><strong>General</strong></p>
<ul>
  <li><code class="highlighter-rouge">io.8ball     :: Magic 8-Ball, does exactly what the toy does. (Results may vary)</code></li>
  <li><code class="highlighter-rouge">io.cat     :: Send random cat image API.</code></li>
  <li><code class="highlighter-rouge">io.dog      :: Send random dog image API.</code></li>
  <li><code class="highlighter-rouge">io.penis     :: gets the penis length of a user via mention, or if no mention the sender.</code></li>
  <li><code class="highlighter-rouge">io.ping     :: Ping/Pong/Pung/Peng/Pang command. I wonder what this does? /sarcasm</code></li>
  <li><code class="highlighter-rouge">io.urban     :: Displays definition from urban search.</code></li>
  <li><code class="highlighter-rouge">io.blur     :: Blur avatar on user mentioned, or if no mention the sender.</code></li>
  <li><code class="highlighter-rouge">io.invert     :: Invert avatar on user mentioned, or if no mention the sender.</code></li>
</ul>

<h1 id="informational commands">Informational Commands</h1>

<p><strong>General</strong></p>
<ul>
  <li><code class="highlighter-rouge">io.feedback     :: Sends feedback to the developers.</code></li>
  <li><code class="highlighter-rouge">io.help    :: Display help for a command.</code></li>
  <li><code class="highlighter-rouge">io.info      :: Provides some information about this bot.</code></li>
  <li><code class="highlighter-rouge">io.invite     :: Displays the join server link of the bot.</code></li>
  <li><code class="highlighter-rouge">io.stats     :: Provides some details about the bot and stats.</code></li>
  <li><code class="highlighter-rouge">io.userinfo     :: Provides some details about the user.</code></li>
  <li><code class="highlighter-rouge">io.whois    :: Provides some details about the user mentioned.</code></li>
</ul>

<h1 id="guild commands">Guild Commands</h1>

<p><strong>Admin</strong></p>
<ul>
  <li><code class="highlighter-rouge">io.conf    :: Define per-server configuration.</code></li>
  <li><code class="highlighter-rouge">io.prune     :: Prune a number of message on the current channel.</code></li>
  <li><code class="highlighter-rouge">io.setNickname     :: Changes the bot's nickname.</code></li>
</ul>

<p><strong>Developer</strong></p>
<ul>
  <li><code class="highlighter-rouge">io.disable    :: Temporarily disables the inhibitor/monitor/command. Resets upon reboot.</code></li>
  <li><code class="highlighter-rouge">io.enable    :: Re-enables or temporarily enables a Inhibitor/Command/Monitor. Default state restored on reboot.</code></li>
</ul>

<p><strong>Informational</strong></p>
<ul>
  <li><code class="highlighter-rouge">io.emojis    :: Show all the custom emojis on the server.</code></li>
  <li><code class="highlighter-rouge">io.enable    :: Show all the roles on the server.</code></li>
</ul>

<p><strong>Example</strong></p>

<p><strong>Note:</strong> Example on io.conf command:</p>
<ul>
  <li><code class="highlighter-rouge">io.conf set prefix !!!</code></li>
</ul>
